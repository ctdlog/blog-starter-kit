import Link from 'next/link';
import { PostType } from '../interfaces/post';

const PostCard = ({ postInfo }: { postInfo: PostType }) => {
  const { slug, title, date } = postInfo;
  return (
    <Link href={`/${slug}`} style={{ border: '1px solid gray' }}>
      <div>
        {title} - {date}
      </div>
    </Link>
  );
};

export default PostCard;
