# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_24_042345) do

  create_table "applications", force: :cascade do |t|
    t.integer "kitten_id"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "housing"
    t.boolean "children"
    t.boolean "employment"
    t.string "work_from_home"
    t.string "hours_unattended"
    t.string "experience"
    t.string "kitten_type"
    t.boolean "give_medication"
    t.boolean "provide_food"
    t.string "current_pets"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["kitten_id"], name: "index_applications_on_kitten_id"
  end

  create_table "kittens", force: :cascade do |t|
    t.string "name"
    t.string "sex"
    t.integer "age"
    t.date "dob"
    t.string "weight"
    t.string "breed"
    t.string "color"
    t.string "pattern"
    t.boolean "altered"
    t.boolean "microchipped"
    t.boolean "declawed"
    t.date "intake_date"
    t.time "intake_time"
    t.string "location_found"
    t.string "intake_type"
    t.string "status"
    t.string "current_location"
    t.string "description"
    t.string "portrait_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
