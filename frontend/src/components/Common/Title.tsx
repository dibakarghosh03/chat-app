import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "This is the chat app",
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
