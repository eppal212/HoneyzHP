import {
  YoutubeThumbnail,
  getChannelVideoList,
} from "@/api/getChannelVideoList";
import { ChannelId } from "@/models/types";

export interface HomeVideo {
  id: string;
  thumbnail: YoutubeThumbnail;
  title: string;
  date: string;
  master: string;
}

const useHomeVideos = () => {
  let videos: HomeVideo[] = [];

  // 영상 수집
  const channelId = Object.values(ChannelId);
  channelId.map((item) => {
    const response = getChannelVideoList({ channelId: item, maxResults: 4 });
    response.then((data) => {
      data.items.map((item) => {
        videos.push({
          id: item.id.videoId,
          thumbnail:
            item.snippet.thumbnails[item.snippet.thumbnails.length - 1],
          title: item.snippet.title,
          date: item.snippet.publishedAt,
          master: item.snippet.channelTitle,
        });
      });
    });
  });
  // const response = getChannelVideoList({
  //   channelId: ChannelId.projecti,
  //   maxResults: 4,
  // });
  // response.then((data) => {
  //   console.log(data);
  // });

  videos = videos.sort((perv, next) => (perv.date > next.date ? -1 : 1)); // 정렬

  return videos.slice(0, 3); // 4개만 추출
};

export default useHomeVideos;
