import style from './SkeletonGrid.module.css'
import SkeletonItem from './SkeletonItem.jsx'


export default function SkeletonGrid({count}) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(<SkeletonItem key={i} />);
  }
  return <div className={style.skeletonGrid}>{items}</div>;
}
