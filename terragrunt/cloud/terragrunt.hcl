terraform {
  source = "${get_terragrunt_dir()}"
}

locals {
  common_vars = read_terragrunt_config(find_in_parent_folders("common.hcl", "common.hcl"))
}

inputs = merge(local.common_vars.inputs, {
  cloud_id = "b1geqp7vebihvsequt3h"
  folder_id = "b1g2usfr7b3383v05isg"
  auth_file_path = "${get_terragrunt_dir()}/../authorized_key.json"
  image_name = dependency.build.outputs.image_name
  domain_name = "dbrakk.tech"
  certificate_id = "fpqljbhhvp82d1s2l29c"
})

dependency "build" {
  config_path = "${get_terragrunt_dir()}/../build"
}

dependencies {
  paths = [
    "${get_terragrunt_dir()}/../build"
  ]
}

include "root" {
  path = find_in_parent_folders()
}
