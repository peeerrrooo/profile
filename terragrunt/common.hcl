locals {
  service_account_id = jsondecode(file("${get_terragrunt_dir()}/authorized_key.json"))["service_account_id"]
}

inputs = {
  service_account_id = local.service_account_id
  domain_name = "dbrakk.tech"
}
