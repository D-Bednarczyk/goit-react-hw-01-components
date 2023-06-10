import css from './Statistics.module.css';

let getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

const StatList = ({ stats }) => {
  return stats.map(liitem => (
    <li
      style={{ backgroundColor: { getRandomColor } }}
      className={css.litem}
      key={liitem.id}
    >
      <p>{liitem.label}</p>
      <p>{liitem.percentage}%</p>
    </li>
  ));
};

export const Statistics = props => {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.headerh1}>{props.title}</h2>
        <ul className={css.list}>
          <StatList stats={props.stats}></StatList>
        </ul>
      </section>
    </>
  );
};
