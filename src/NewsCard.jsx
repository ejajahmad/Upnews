import React, { useRef } from "react";

// export default function NewsCard({ news }) {
//   const cardRef = useRef();

//   const handleNextCard = () => {
//     // get cardRef height
//     const cardHeight = cardRef.current.offsetHeight;
//     // get current card position
//     const currentPosition = cardRef.current.getBoundingClientRect().top;
//     // get current scroll position
//     const currentScroll = window.pageYOffset;
//     // get current scroll position + card height
//     const nextScroll = currentScroll + cardHeight;
//     // scroll to next card
//     window.scrollTo({
//       top: nextScroll,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="p-5 w-full h-max bg-gray-50 rounded-lg border-2 border-black space-y-5" ref={cardRef}>
//       <div className="flex flex-col items-start gap-2">
//         <h1 className="text-3xl font-bold w-full overflow-hidden text-ellipsis">{news.title}</h1>
//         <div className="w-full flex items-center justify-between">
//           <div className="text-gray-600">{news.author}</div>
//           <div className="text-gray-600">{news.date}</div>
//         </div>
//         <p className="text-md w-full overflow-hidden text-ellipsis">{news.content}</p>
//         <a href={news.readMoreUrl} target={"_blank"} className="text-blue-500 hover:text-blue-700">
//           Read More
//         </a>
//       </div>

//       {news && news.imageUrl && (
//         <div className="w-full h-[500px] bg-gray-700 border border-gray-300 flex flex-col">
//           <img
//             src={news.imageUrl}
//             alt="news"
//             className="w-full h-full object-cover rounded-lg border-2 border-black "
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// REDDIT API
// export default function NewsCard({ news }) {
//   return (
//     <div className="p-5 w-full h-max bg-gray-50 rounded-lg border-2 border-black ">
//       <div className="flex flex-col items-center gap-5">
//         <h1 className="text-3xl font-bold w-full overflow-hidden text-ellipsis">{news.title}</h1>
//         <p className="text-md w-full overflow-hidden text-ellipsis">{news.selftext}</p>
//       </div>
//       {news && news.preview && news.preview.images && news.preview.images.length > 0 && (
//         <div className="w-full h-[500px] bg-gray-700 border border-gray-300 flex flex-col">
//           <img
//             src={news.preview.images[0].resolutions[news.preview.images[0].resolutions.length - 1].url.replaceAll(
//               "&amp;",
//               "&"
//             )}
//             alt="news"
//             className="w-full h-full object-cover rounded-lg border-2 border-black "
//           />
//         </div>
//       )}
//     </div>
//   );
// }

const NewsCard = React.forwardRef((props, ref) => {
  const { news } = props;
  const cardRef = useRef();

  return (
    <div
      className="  rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 "
      ref={ref}
    >
      <div className="p-5 w-full h-max space-y-4  rounded-lg border-2 border-black">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-bold w-full overflow-hidden text-ellipsis">{news.title}</h1>
          <div className="w-full flex items-center justify-between">
            <div className="text-gray-600">{news.author}</div>
            <div className="text-gray-600">{news.date}</div>
          </div>
          <p className="text-md w-full overflow-hidden text-ellipsis">{news.content}</p>
          <a href={news.readMoreUrl} target={"_blank"} className="text-blue-500 hover:text-blue-700">
            Read More
          </a>
        </div>

        {news && news.imageUrl && (
          <div className="w-full h-[500px] bg-gray-700 border border-gray-300 flex flex-col">
            <img
              src={news.imageUrl}
              alt="news"
              className="w-full h-full object-cover rounded-lg border-2 border-black "
            />
          </div>
        )}
      </div>
    </div>
  );
});

export default NewsCard;
