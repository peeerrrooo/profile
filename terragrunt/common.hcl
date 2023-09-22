locals {
  service_account_id = jsondecode(file("${get_terragrunt_dir()}/authorized_key.json"))["service_account_id"]
}

inputs = {
  service_account_id = local.service_account_id
  registry_password = file("${get_terragrunt_dir()}/authorized_key.json")
  domain_name = "dbrakk.tech"
  app_name = "profile"
}
