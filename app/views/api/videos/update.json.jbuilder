json.video do
  json.extract! video, :id, :title, :description, :views, :comment_ids, :uploader_id
  json.thumbnail_image_url url_for(video.thumbnail_image)
  json.film_url url_for(video.film)
end
