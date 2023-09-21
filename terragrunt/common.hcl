locals {
  service_account_id = jsondecode(file("${get_terragrunt_dir()}/authorized_key.json"))["service_account_id"]
}

inputs = {
  service_account_id = local.service_account_id
  registry_id = "cr.yandex/crp38p8uptqkachq3oo4"
  registry_password = file("${get_terragrunt_dir()}/authorized_key.json")
  telegram_token = "1563675250:AAGFbOAoJ5vzgFesuz4UWXT-S-ShVhN3caE"
  telegram_chat_id = "204305912"
}
