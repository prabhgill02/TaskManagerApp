
provider "aws" {
  region = var.region
}

module "vpc" {
  source = "../modules/vpc"
  cidr_block = var.vpc_cidr
  tags = local.tags
}

module "subnet" {
  source = "../modules/subnet"
  vpc_id = module.vpc.vpc_id
  cidr_block = var.subnet_cidr
  availability_zone = var.availability_zone
  route_table_id    = module.vpc.route_table_id
  tags = local.tags
}

module "sg" {
  source = "../modules/security_group"
  vpc_id = module.vpc.vpc_id
  tags   = local.tags
}

module "s3_frontend" {
  source      = "../modules/s3"
  bucket_name = var.bucket_name
  tags        = local.tags
}

module "backend_ec2" {
  source         = "../modules/ec2"
  ami_id         = var.ami_id
  instance_type  = var.instance_type
  key_name       = var.key_name
  subnet_id      = module.subnet.subnet_id
  security_groups = [module.sg.sg_id]
  tags           = local.tags
}

output "frontend_url" {
  value = module.s3_frontend.website_url
}

output "backend_ip" {
  value = module.backend_ec2.public_ip
}
