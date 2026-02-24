import { Flex, For } from "@chakra-ui/react";
import Post from "./Post";

export default function PostList() {
  const posts = [
    {
      id: 2,
      created_at: new Date(),
      published_at: new Date(),
      title: "Lorem ipsum dolor sit amet",
      content:
        "IEM Krakow, according to data from Esports Charts, racked up 40,215,587 hours watched, the most of any non-Major, and 1,387,966 peak viewers, again the best of any non-Major event. These statistics put IEM Krakow 13th and 8th all-time for hours watched and peak viewers respectively.",
      authorName: "Juan Pablo Dos",
    },
    {
      id: 2,
      created_at: new Date(),
      published_at: new Date(),
      title: "Lorem ipsum",
      content:
        "IEM Krakow, according to data from Esports Charts, racked up 40,215,587 hours watched, the most of any non-Major, and 1,387,966 peak viewers, again the best of any non-Major event. These statistics put IEM Krakow 13th and 8th all-time for hours watched and peak viewers respectively.",
      authorName: "Juan Pablo Dos",
    },
    {
      id: 2,
      created_at: new Date(),
      published_at: new Date(),
      title: "Lorem ipsum",
      content:
        "IEM Krakow, according to data from Esports Charts, racked up 40,215,587 hours watched, the most of any non-Major, and 1,387,966 peak viewers, again the best of any non-Major event. These statistics put IEM Krakow 13th and 8th all-time for hours watched and peak viewers respectively.",
      authorName: "Juan Pablo Dos",
    },
    {
      id: 2,
      created_at: new Date(),
      published_at: new Date(),
      title: "Lorem ipsum",
      content:
        "IEM Krakow, according to data from Esports Charts, racked up 40,215,587 hours watched, the most of any non-Major, and 1,387,966 peak viewers, again the best of any non-Major event. These statistics put IEM Krakow 13th and 8th all-time for hours watched and peak viewers respectively.",
      authorName: "Juan Pablo Dos",
    },
    {
      id: 2,
      created_at: new Date(),
      published_at: new Date(),
      title: "Lorem ipsum",
      content:
        "IEM Krakow, according to data from Esports Charts, racked up 40,215,587 hours watched, the most of any non-Major, and 1,387,966 peak viewers, again the best of any non-Major event. These statistics put IEM Krakow 13th and 8th all-time for hours watched and peak viewers respectively.",
      authorName: "Juan Pablo Dos",
    },
    {
      id: 2,
      created_at: new Date(),
      published_at: new Date(),
      title: "Lorem ipsum",
      content:
        "IEM Krakow, according to data from Esports Charts, racked up 40,215,587 hours watched, the most of any non-Major, and 1,387,966 peak viewers, again the best of any non-Major event. These statistics put IEM Krakow 13th and 8th all-time for hours watched and peak viewers respectively.",
      authorName: "Juan Pablo Dos",
    },
  ];

  return (
    <Flex direction={"column"} mt={"10"} gap={5}>
      <For each={posts}>
        {(item, index) => (
          <Post
            key={index}
            id={item.id}
            created_at={item.created_at}
            published_at={item.published_at}
            title={item.title}
            content={item.content}
            authorName={item.authorName}></Post>
        )}
      </For>
    </Flex>
  );
}
