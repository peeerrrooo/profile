//terraform {
//  required_providers {
//    yandex = {
//      source = "yandex-cloud/yandex"
//    }
//  }
//
//  required_version = ">= 0.13"
//}

provider "yandex" {
  service_account_key_file = var.auth_file_path
  cloud_id                 = var.cloud_id
  folder_id                = var.folder_id
  zone                     = "ru-central1-a"
}
