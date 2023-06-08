import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.gradient}>
          <p className={styles.about}>
           Dziękujemy za wybór naszej przychodni zdrowia "U Zięby". Naszym głównym celem jest zapewnienie Ci kompleksowej opieki
           medycznej. Oprócz dwóch lekarzy internistów, w naszych szeregach znajdują się również inni specjaliści. Dzięki temu
           możemy zaspokoić różnorodne potrzeby zdrowotne naszych pacjentów. Założenie konta w naszej przychodni to prosta procedura
           rejestracji. Posiadając konto, zyskasz wiele korzyści, takich jak łatwa rejestracja wizyty u wybranego specjalisty, dostęp
           do listy zaleceń i historii wcześniej przepisanych leków przez naszych lekarzy. Nasza strona internetowa umożliwia również
           przeglądanie zarówno odbytych, jak i przyszłych wizyt. Dzięki temu zawsze będziesz mieć pełną kontrolę nad swoim harmonogramem
           medycznym. Przychodnia "U Zięby" to miejsce, w którym nowoczesność idzie w parze z wygodą. Jednak to nasz zespół wysoko
           wykwalifikowanych pracowników jest naszą prawdziwą wartością dodaną. Każdego dnia oddają oni swoją wiedzę i cenne doświadczenie,
           dbając o Twoje zdrowie. Jesteśmy dumni z naszego profesjonalizmu i dążymy do utrzymania go na najwyższym poziomie. Nie czekaj dłużej,
           dołącz już dziś do grona setek zadowolonych pacjentów przychodni "U Zięby". Gwarantujemy, że Twoje zdrowie będzie utrzymane na 
           najwyższym poziomie, a Ty otrzymasz pełną opiekę medyczną, której potrzebujesz. Czekamy na Ciebie z otwartymi ramionami.
          </p>
        </div>
      </div>
    </div>
    );
  }
  
  export default HomePage;