locals {
  service_account_id = jsondecode(file("${get_terragrunt_dir()}/authorized_key.json"))["service_account_id"]
}

generate "backend" {
  path = "backend.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
terraform {
  backend "s3" {
    endpoint   = "storage.yandexcloud.net"
    access_key = "YCAJERJ01VdkGnwA2ZAOQCz9_"
    secret_key = "YCNiUuB2Kdm_hGLzHJzofFeM8LnXMoOAAuROeirP"
    bucket     = "profile-state"
    key        = "${path_relative_to_include()}/terraform.tfstate"
    region     = "ru-central1"
    skip_region_validation      = true
    skip_credentials_validation = true
  }
}
EOF
}
