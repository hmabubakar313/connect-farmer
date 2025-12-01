CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "full_name" varchar,
  "email" varchar UNIQUE NOT NULL,
  "password_hash" varchar,
  "role" varchar,
  "phone" varchar,
  "profile_picture_url" varchar,
  "is_active" boolean,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "farmer_profiles" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid NOT NULL,
  "farm_name" varchar,
  "farm_description" text,
  "location_address" varchar,
  "city" varchar,
  "region" varchar,
  "latitude" numeric(9,6),
  "longitude" numeric(9,6),
  "is_verified" boolean,
  "verification_status" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "consumer_profiles" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid NOT NULL,
  "default_address_id" uuid,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "addresses" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid NOT NULL,
  "label" varchar,
  "line1" varchar,
  "line2" varchar,
  "city" varchar,
  "region" varchar,
  "postal_code" varchar,
  "country" varchar,
  "latitude" numeric(9,6),
  "longitude" numeric(9,6),
  "is_default" boolean,
  "created_at" timestamp
);

CREATE TABLE "categories" (
  "id" uuid PRIMARY KEY,
  "name" varchar NOT NULL,
  "parent_id" uuid,
  "description" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "products" (
  "id" uuid PRIMARY KEY,
  "farmer_id" uuid NOT NULL,
  "category_id" uuid NOT NULL,
  "name" varchar NOT NULL,
  "description" text,
  "quality_grade" varchar,
  "price_per_unit" numeric(10,2) NOT NULL,
  "unit" varchar,
  "stock_quantity" numeric(12,3),
  "min_order_quantity" numeric(12,3),
  "harvest_date" date,
  "status" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "product_images" (
  "id" uuid PRIMARY KEY,
  "product_id" uuid NOT NULL,
  "image_url" varchar NOT NULL,
  "is_primary" boolean,
  "created_at" timestamp
);

CREATE TABLE "orders" (
  "id" uuid PRIMARY KEY,
  "consumer_id" uuid NOT NULL,
  "delivery_address_id" uuid NOT NULL,
  "order_status" varchar,
  "payment_status" varchar,
  "subtotal_amount" numeric(10,2),
  "delivery_fee" numeric(10,2),
  "total_amount" numeric(10,2),
  "notes" text,
  "placed_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "order_items" (
  "id" uuid PRIMARY KEY,
  "order_id" uuid NOT NULL,
  "product_id" uuid NOT NULL,
  "farmer_id" uuid NOT NULL,
  "quantity" numeric(12,3) NOT NULL,
  "unit_price" numeric(10,2) NOT NULL,
  "subtotal" numeric(10,2),
  "created_at" timestamp
);

CREATE TABLE "payments" (
  "id" uuid PRIMARY KEY,
  "order_id" uuid NOT NULL,
  "provider" varchar,
  "payment_method" varchar,
  "amount" numeric(10,2) NOT NULL,
  "status" varchar,
  "customer_reference" varchar,
  "payment_reference" varchar,
  "transaction_reference" varchar,
  "payment_metadata" text,
  "paid_at" timestamp,
  "created_at" timestamp
);

CREATE TABLE "reviews" (
  "id" uuid PRIMARY KEY,
  "order_id" uuid NOT NULL,
  "product_id" uuid NOT NULL,
  "consumer_id" uuid NOT NULL,
  "farmer_id" uuid NOT NULL,
  "rating" integer,
  "comment" text,
  "is_visible" boolean,
  "created_at" timestamp
);

CREATE TABLE "farmer_documents" (
  "id" uuid PRIMARY KEY,
  "farmer_id" uuid NOT NULL,
  "doc_type" varchar,
  "file_url" varchar NOT NULL,
  "status" varchar,
  "reviewed_by_admin_id" uuid,
  "reviewed_at" timestamp,
  "created_at" timestamp
);

CREATE TABLE "notifications" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid NOT NULL,
  "type" varchar,
  "title" varchar,
  "message" text,
  "is_read" boolean,
  "created_at" timestamp,
  "read_at" timestamp
);

ALTER TABLE "farmer_profiles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "consumer_profiles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "consumer_profiles" ADD FOREIGN KEY ("default_address_id") REFERENCES "addresses" ("id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "categories" ADD FOREIGN KEY ("parent_id") REFERENCES "categories" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("farmer_id") REFERENCES "farmer_profiles" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "product_images" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("consumer_id") REFERENCES "consumer_profiles" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("delivery_address_id") REFERENCES "addresses" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("farmer_id") REFERENCES "farmer_profiles" ("id");

ALTER TABLE "payments" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("consumer_id") REFERENCES "consumer_profiles" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("farmer_id") REFERENCES "farmer_profiles" ("id");

ALTER TABLE "farmer_documents" ADD FOREIGN KEY ("farmer_id") REFERENCES "farmer_profiles" ("id");

ALTER TABLE "farmer_documents" ADD FOREIGN KEY ("reviewed_by_admin_id") REFERENCES "users" ("id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
