
output "website_url" {
  value = aws_s3_bucket.frontend.website_endpoint
}
