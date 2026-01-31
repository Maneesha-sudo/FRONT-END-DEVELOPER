
  id             uuid                 not null                            default gen_random_uuid (),
  created_at      timestamp with time zone    not null       default now(),
  cus_id          uuid                not null     default gen_random_uuid (),
  vehicle_id      uuid                null         default gen_random_uuid (),
  allowed_passengers    integer        null,
  distance_km         numeric         null,
  trip_cost          numeric          null,
  constraint Trips_pkey            primary key (id, cus_id)