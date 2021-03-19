class CreateNaverProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :naver_projects do |t|
      t.integer :naver_id
      t.integer :project_id

      t.timestamps
    end
  end
end
