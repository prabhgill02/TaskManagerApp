
variable "ami_id" {}
variable "instance_type" {}
variable "key_name" {}
variable "subnet_id" {}
variable "security_groups" {
  type = list(string)
}
variable "tags" {
  type = map(string)
  default = {}
}
