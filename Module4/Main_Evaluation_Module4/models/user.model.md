
  id          uuid       not null                  default gen_random_uuid (),
  created_at timestamp with time zone    not null  default now(),
  name       text        null                       default ''::text,
  email      text        not null,
  password   text        not null,
  role       text         null,
  constraint users_email_key                    unique (email)
;