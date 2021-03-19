class CreateNavers < ActiveRecord::Migration[6.1]
  def change
    create_table :navers do |t|
      t.string :name
      t.date :birthdate
      t.date :adminssion_date
      t.string :job_role
      t.integer :user_id

      t.timestamps
    end
  end
end
