generate "backend" {
  path = "backend.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
terraform {
  backend "s3" {
    endpoint   = "storage.yandexcloud.net"
    access_key = "${get_env(\"AWS_ACCESS_KEY_ID\")}"
    secret_key = "${get_env(\"AWS_SECRET_ACCESS_KEY\")}"
    bucket     = "profile-state"
    key        = "${path_relative_to_include()}/terraform.tfstate"
    region     = "ru-central1"
    skip_region_validation      = true
    skip_credentials_validation = true
  }
}
EOF
}
