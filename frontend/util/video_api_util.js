export const getVideo = (videoId, limit, offset) => {
  return $.ajax({
    url: `api/videos/${videoId}`,
    method: 'GET',
    data: {video_index_params: {limit, offset}}
  });
};

export const getVideos = (limit, offset) => (
  $.ajax({
    url: 'api/videos',
    method: 'GET',
    data: {video_index_params: {limit, offset}}
  })
);

export const createVideo = video => (
  $.ajax({
    url: 'api/videos',
    method: 'POST',
    data: {video, video_index_params: {offset: 0, limit: 10}}
  })
);

export const deleteVideo = id => (
  $.ajax({
    url: `api/videos/${id}`,
    method: 'DELETE'
  })
);

export const updateVideo = video => (
  $.ajax({
    url: `api/videos/${video.id}`,
    method: 'PATCH',
    data: {video: video}
  })
);
