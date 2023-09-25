resource "yandex_serverless_container" "profile-site" {
  name = "profile-site"
  description = "Profile site container"
  memory = 4096
  cores = 1
  core_fraction = 100
  service_account_id = var.service_account_id
  execution_timeout = "1s"
  concurrency = 10

  image {
    url = var.image_name

    environment = {
      NODE_ENV = "production"
      TELEGRAM_TOKEN = var.telegram_token
      TELEGRAM_CHAT_ID = var.telegram_chat_id
    }
  }
}
