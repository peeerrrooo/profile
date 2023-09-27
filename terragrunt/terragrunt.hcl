locals {
  AWS_ACCESS_KEY_ID = get_env("AWS_ACCESS_KEY_ID")
  AWS_SECRET_ACCESS_KEY = get_env("AWS_SECRET_ACCESS_KEY")
  TERRAFORM_STATE_BUCKET = get_env("TERRAFORM_STATE_BUCKET")
}

generate "backend" {
  path = "backend.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
terraform {
  backend "s3" {
    endpoint   = "storage.yandexcloud.net"
    access_key = "${local.AWS_ACCESS_KEY_ID}"
    secret_key = "${local.AWS_SECRET_ACCESS_KEY}"
    bucket     = "${local.TERRAFORM_STATE_BUCKET}"
    key        = "${path_relative_to_include()}/terraform.tfstate"
    region     = "ru-central1"
    skip_region_validation      = true
    skip_credentials_validation = true
  }
}
EOF
}
