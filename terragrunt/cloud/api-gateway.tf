resource "yandex_api_gateway" "app-gateway" {
  depends_on = [
    yandex_serverless_container.profile-site
  ]

  name = "profile-gateway"
  description = "Profile site gateway (dbrakk.tech)"

  custom_domains {
    fqdn = var.domain_name
    certificate_id = var.certificate_id
  }

  custom_domains {
    fqdn = "www.${var.domain_name}"
    certificate_id = var.certificate_id
  }

  spec = <<-EOT
openapi: "3.0.0"
info:
  version: 1.0.0
  title: App Gateway
paths:
 /:
    get:
      x-yc-apigateway-integration:
        type: serverless_containers
        container_id: "${yandex_serverless_container.profile-site.id}"
        service_account_id: "${var.service_account_id}"
 /d.brakk-profile-cv.pdf:
    get:
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/d.brakk-profile-cv.pdf"
        service_account_id: "${var.service_account_id}"
 /api/feedback:
    post:
      x-yc-apigateway-integration:
        type: serverless_containers
        container_id: "${yandex_serverless_container.profile-site.id}"
        service_account_id: "${var.service_account_id}"
 /android-{file}:
    get:
      parameters:
        - name: file
          in: path
          required: true
          schema:
            type: string
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/android-{file}"
        service_account_id: "${var.service_account_id}"
 /apple-{file}:
    get:
      parameters:
        - name: file
          in: path
          required: true
          schema:
            type: string
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/apple-{file}"
        service_account_id: "${var.service_account_id}"
 /favicon.ico:
    get:
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/favicon.ico"
        service_account_id: "${var.service_account_id}"
 /favicon-{file}:
    get:
      parameters:
        - name: file
          in: path
          required: true
          schema:
            type: string
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/favicon-{file}"
        service_account_id: "${var.service_account_id}"
 /ms-icon-{file}:
    get:
      parameters:
        - name: file
          in: path
          required: true
          schema:
            type: string
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/ms-icon-{file}"
        service_account_id: "${var.service_account_id}"
 /robots.txt:
    get:
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/robots.txt"
        service_account_id: "${var.service_account_id}"
 /manifest.json:
    get:
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/manifest.json"
        service_account_id: "${var.service_account_id}"
 /browserconfig.xml:
    get:
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/browserconfig.xml"
        service_account_id: "${var.service_account_id}"
 /about-me.jpg:
    get:
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "public/about-me.jpg"
        service_account_id: "${var.service_account_id}"
 /_next/static/chunks/{file}:
    get:
      parameters:
        - name: file
          in: path
          required: true
          schema:
            type: string
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "_next/static/chunks/{file}"
        service_account_id: "${var.service_account_id}"
 /_next/static/chunks/pages/{file}:
    get:
      parameters:
        - name: file
          in: path
          required: true
          schema:
            type: string
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "_next/static/chunks/pages/{file}"
        service_account_id: "${var.service_account_id}"
 /_next/static/{dir}/{file}:
    get:
      parameters:
        - name: dir
          in: path
          required: true
          schema:
            type: string
        - name: file
          in: path
          required: true
          schema:
            type: string
      x-yc-apigateway-integration:
        type: object_storage
        bucket: ${var.bucket_name}
        object: "_next/static/{dir}/{file}"
        service_account_id: "${var.service_account_id}"
EOT
}
