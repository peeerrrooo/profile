resource "yandex_dns_zone" "dbrakk-tech-zone" {
  name = "dbrakk-tech"
  description = "DNS zone dbrakk.tech"

  zone = "${var.domain_name}."
  public = true
  private_networks = []
}

resource "yandex_dns_recordset" "aname-dbrakk-tech" {
  zone_id = yandex_dns_zone.dbrakk-tech-zone.id
  name    = "${var.domain_name}."
  type    = "ANAME"
  ttl     = 200
  data    = [yandex_api_gateway.app-gateway.domain]
}

resource "yandex_dns_recordset" "aname-www-dbrakk-tech" {
  zone_id = yandex_dns_zone.dbrakk-tech-zone.id
  name    = "www.${var.domain_name}."
  type    = "ANAME"
  ttl     = 200
  data    = [yandex_api_gateway.app-gateway.domain]
}
