import css from './Statistics.module.css';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StatList = ({ stats }) => {
  //console.log(stats);
  //stats.map(f => console.log(f));
  return stats.map(liitem => (
    <li
      style={{ backgroundColor: getRandomColor() }}
      className={css.litem}
      key={liitem.id}
    >
      <p className={css.label}>{liitem.label}</p>
      <p className={css.perc}>{liitem.percentage}%</p>
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
