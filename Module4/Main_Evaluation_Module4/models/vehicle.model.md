
  id uuid           not null     default gen_random_uuid (),
  created_at         timestamp with time zone   not null default now(),
  name                 text    null,
  registration_number    text     null,
  allowed_passengers     integer     null,
  rate_per_km      numeric null,
  driver_id      uuid      not null     default gen_random_uuid (),
  owner_id       uuid      not null     default gen_random_uuid (),
  "isAvailable:"        boolean   null,
  constraint vehicles_pkey     primary key (driver_id, owner_id),
  constraint vehicles_registration_number_key     unique (registration_number)
