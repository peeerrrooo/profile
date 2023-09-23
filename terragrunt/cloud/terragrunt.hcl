terraform {
  source = "${get_terragrunt_dir()}"
}

locals {
  common_vars = read_terragrunt_config(find_in_parent_folders("common.hcl", "common.hcl"))
}

inputs = merge(local.common_vars.inputs, {
  auth_file_path = "${get_terragrunt_dir()}/../authorized_key.json"
})

include "root" {
  path = find_in_parent_folders()
}
