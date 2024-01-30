import axios from "axios";
import { YouTubeAPI } from "@/api/AxiosSetting";
import { ChannelId } from "@/models/types";

// 채널 비디오 목록 조회 파라미터
interface GetChannelVideoListParams {
  channelId: ChannelId;
  maxResults?: number;
}

export interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

// 영상 정보
export interface YoutubeVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string; //
  };
  snippet: {
    publishedAt: string;
    channelId: string; //
    title: string; //
    description: string;
    thumbnails: YoutubeThumbnail[]; //
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

// 채널 비디오 목록 조회 결과
interface GetChannelVideoListData {
  kind: string;
  etag: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeVideo[];
}

// 채널 비디오 목록 조회
export async function getChannelVideoList(
  params: GetChannelVideoListParams
): Promise<GetChannelVideoListData> {
  try {
    const response = await YouTubeAPI.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        order: "date",
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<any>(error)) {
      return error.response?.data;
    } else {
      throw new Error("getChannelVideoList Api Failed");
    }
  }
}
