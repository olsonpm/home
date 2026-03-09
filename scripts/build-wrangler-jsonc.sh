#! /usr/bin/env sh

# shellcheck source=../.env
if [ -z "${NEXT_PUBLIC_DOMAIN}" ]; then
  . ./.env
fi

cp wrangler-template.jsonc wrangler.jsonc
sed -i -e "s/{{NEXT_PUBLIC_DOMAIN}}/${NEXT_PUBLIC_DOMAIN}/g" wrangler.jsonc
