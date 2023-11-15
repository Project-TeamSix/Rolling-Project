import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderService from "../components/HeaderService/HeaderService";
import getRecipientRead from "../apis/getRecipientRead";
import { useAsync } from "../hooks/useAsync";
import style from "./RollingPaperPage.module.css";
import clsx from "clsx";
import Cards from "../components/Cards/Cards";
import { Navigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import postRecipientMessage from "../apis/postRecipientMessage";

const PostPage = () => {
  const { id } = useParams();
  const { loading, data } = useAsync(getRecipientRead, { id });
  const {
    name,
    messageCount,
    recentMessages,
    backgroundColor,
    backgroundImageURL,
  } = data;

  useAsync(postRecipientMessage, {
    recipientId: "488",
    sender: "test14",
    profileImageURL:
      "https://cdn.pixabay.com/photo/2017/11/05/08/38/christmas-2919725_640.jpg",
    content: "test14",
  });
  const recentProfileImg = recentMessages
    ? recentMessages.map((value) => value.profileImageURL)
    : [
        "example/profileImage01.png",
        "example/profileImage02.png",
        "example/profileImage03.png",
      ];

  const background = backgroundImageURL
    ? { backgroundImage: `url(${backgroundImageURL})` }
    : {};

  if (loading) return <div>loading</div>;
  if (data == false) {
    return <Navigate to="/" />;
  }
  return (
    <LocaleContext.Provider value={{ name: name }}>
      <div className={style.root}>
        <Header />
        <HeaderService
          recipientId={id}
          recipientName={name}
          messageCount={messageCount}
          profileImageURLs={recentProfileImg}
        />

        <div
          className={clsx(style.cardSection, {
            [style[backgroundColor]]: !backgroundImageURL,
          })}
          style={background}
        >
          <Cards />
        </div>
      </div>
    </LocaleContext.Provider>
  );
};

export default PostPage;