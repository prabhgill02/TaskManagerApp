
variable "vpc_id" {}
variable "cidr_block" {}
variable "availability_zone" {}
variable "route_table_id" {}
variable "tags" {
  type = map(string)
  default = {}
}
