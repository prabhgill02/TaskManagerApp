
variable "region" {}
variable "vpc_cidr" {}
variable "subnet_cidr" {}
variable "availability_zone" {}
variable "bucket_name" {}
variable "ami_id" {}
variable "instance_type" {}
variable "key_name" {}

locals {
  tags = {
    Project = "TaskManagerApp"
  }
}
