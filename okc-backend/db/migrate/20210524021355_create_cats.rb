class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :sex
      t.integer :age
      t.date :dob
      t.string :weight
      t.string :breed
      t.string :color
      t.string :pattern
      t.boolean :altered
      t.boolean :microchipped
      t.boolean :declawed
      t.date :intake_date
      t.time :intake_time
      t.string :location_found
      t.string :intake_type
      t.string :status
      t.string :current_location
      t.string :description
      t.timestamps
    end
  end
end
