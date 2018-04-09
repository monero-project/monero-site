<div class="container description">
<p>Monero jest zobowiązane nie tylko do produkcji zamiennej waluty, ale także do ciągłego badania w zakresie prywatności finansowej, która dotyczy kryptowalut. Poniżej znajdziesz prace naszego własnego Laboratorium Badawczego Monero. Więcej dokumentów wkrótce.</p>
</div>

<section class="container">
            <div class="row">
                <!-- left two-thirds block-->
                <div class="left two-thirds col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="info-block research-paper">
                        <div class="row center-xs">
                            <div class="col"><h2>Dokumenty Laboratorium Badawczego Monero</h2></div>
                        </div>
                        <div class="tab">
                              <input id="tab-one" type="checkbox" name="tabs" class="accordion" checked="checked">
                              <label for="tab-one" class="accordion">MRL-0001: O reakcji łańcuchowej w identyfikowalności w CryptoNote 2.0</label>
                              <div class="tab-content">
                                <p><strong>Abstrakt:</strong> Ten biuletyn badawczy opisuje ewentualny atak na system anonimowości                          oparty na podpisie pierścieniowym. Do argumentacji użyliśmy protokołu o kryptowalutach CryptoNote 2.0 opublikowanego przez Nicolasa van Saberhagena w 2012 roku. Zostało już uprzednio zaprezentowane, że nieidentyfikowalność maskująca parę jednorazowych kluczy może być uzależniona od nieidentyfikowalności wszystkich kluczy użytych w danym podpisie pierścieniowym. Pozwala to na możliwą reakcję łańcuchową w identyfikowalności pomiędzy podpisami pierścieniowymi, powodując krytyczną utratę nieidentyfikowalności całej sieci, jeśli parametry będą źle dobrane oraz jeśli atakujący będzie w posiadaniu wystarczającego procentu sieci. Podpisy jednak nadal są jednorazowe i jakikolwiek taki atak niekoniecznie naruszy anonimowość użytkowników. Mimo to, taki atak mógłby przypuszczalnie osłabić wytrzymałość, którą CryptoNote demonstruje przeciwko analizie łańcuchu bloków. Ten biuletyn badawczy nie uległ rewizji i jedynie odzwierciedla wyniki wewnętrznego dochodzenia.                                         
                                    <br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0001.pdf">Przeczytaj całość</a>
                               </p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-two" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-two" class="accordion">MRL-0002: Fałszowanie walut wirtualnych używających protokołu CryptoNote, za pomocą drzewa skrótów</label>
                              <div class="tab-content">
                                <p><strong>Abstrakt:</strong> Czwartego września 2014 roku miał miejsce nietypowy i nowatorski atak na sieć kryptowaluty Monero. Atak podzielił sieć na dwa oddzielne podzbiory, które odmówiły zaakceptowania słuszności drugiej podgrupy. Spowodowało to niezliczone efekty, których część nie została jeszcze poznana. Hakerzy mieli krótki okres czasu, podczas którego mogło dojść m.in. do sfałszowania. Ten biuletyn badawczy opisuje niedociągnięcia w kodzie referencyjnym CryptoNote, które pozwoliły na ten atak, rozwiązania wstępnie podjęte przez Rafała Freemana z Tigusoft.pl, a następnie przez zespół CryptoNote, aktualne poprawki w bazie kodowej Monero oraz bada wpływ zaatakowanego bloku na sieć. Ten biuletyn badawczy nie uległ rewizji i jedynie odzwierciedla wyniki wewnętrznego dochodzenia.<br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0002.pdf">Przeczytaj całość</a></p>                                    
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-three" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-three" class="accordion">MRL-0003: Monero nie jest takie tajemnicze</label>
                              <div class="tab-content">
                                <p><strong>Wstęp:</strong> Ostatnio w internecie pojawiły się pewne obawy odnośnie kodu źródłowego CryptoNote oraz protokołu, oparte na tym, że protokół ten jest bardziej skomplikowany niż, na przykład, protokół Bitcoina. Celem tej notatki jest próba wyjaśnienia niektórych nieporozumień oraz rozwianie tajemnicy otaczającej Podpisy Pierścieniowe Monero. Zacznę od porównania obliczeń użytych w podpisach pierścieniowych CryptoNote (jak opisano w [CN]) z obliczeniami w [FS], na których bazuje CryptoNote. Następnie porównam obliczenia w podpisie pierścieniowym do tego, co tak naprawdę jest zawarte w bazie kodowej CryptoNote.
                                            <br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0003.pdf">Przeczytaj całość</a></p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-four" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-four" class="accordion">MRL-0004: Ulepszanie maskowania w protokole CryptoNote</label>
                              <div class="tab-content">
                                <p><strong>Abstrakt:</strong> Zauważyliśmy, że wiele ataków w formie analizy łańcuchów bloków może zdegradować niewykrywalność protokołu CryptoNote 2.0. Analizujemy możliwe rozwiązania, dyskutujemy względne zalety i wady tych rozwiązań i sugerujemy ulepszenia w protokole Monero, które zapewnią długoterminową odporność kryptowaluty na analizy łańcucha bloków. Nasze zalecane ulepszenia Monero uwzględniają politykę minimalnego miksowania na poziomie protokołu w całej sieci z n=2 obcych wyjść na jeden podpis pierścieniowy, zwiększenie tej ilości do n=4 na poziomie protokołu po dwóch latach oraz tymczasową domyślną ilość n=4 na poziomie portfela. Zalecamy również metodę wysyłania wyjść Monero w stylu torrentów. Dyskutujemy także nad niejednolitą, zależną od wieku metodą wyboru miksowania w celu złagodzenia pozostałych form analizy łańcucha bloków tu opisanych, ale nie czynimy żadnych formalnych zaleceń ich wdrożenia z wielu powodów. Rozgałęzienia następujące w efekcie tych ulepszeń również są opisane w pewnym stopniu. Ten biuletyn badawczy nie uległ rewizji i jedynie odzwierciedla wyniki wewnętrznego dochodzenia.<br>
                                    <br>
                                    <a target="_blank" rel="noreferrer noopener" href="https://lab.getmonero.org/pubs/MRL-0004.pdf">Przeczytaj całość</a></p>
                              </div>
                            </div>
                            <div class="tab">
                              <input id="tab-five" type="checkbox" name="tabs" class="accordion">
                              <label for="tab-five" class="accordion">MRL-0005: Transakcje z Poufnym Podpisem Pierścieniowym</label>
                              <div class="tab-content">
                                <p><strong>Abstrakt:</strong> Ten artykuł wprowadza do metody ukrywania kwot transakcji w silnie zdecentralizowanej, anonimowej kryptowalucie Monero. Podobnie jak Bitcoin, Monero jest kryptowalutą rozprowadzaną za pomocą procesu wydobycia z dowodem pracy. Oryginalny protokół Monero został oparty na CryptoNote, który używa podpisów pierścieniowych oraz jednorazowych kluczy w celu ukrycia nadawcy i odbiorcy płatności. Ostatnio deweloper Centrum Bitcoina, Gregory Maxwell, omawiał oraz wdrożył technikę użycia zobowiązań bitowych, aby ukryć kwotę transakcji. Ten artykuł opisuje nowy rodzaj podpisu pierścieniowego - Wielowarstwowy Łączony Spontaniczny Anonimowy Podpis Grupowy, który umożliwia ukrycie kwot, nadawcy i odbiorcy przelewów z rozsądną wydajnością oraz weryfikowalną produkcją monet bez zaufania. Przytoczono niektóre rozszerzenia protokołu, takie jak Zagregowane Dowody Zasięgu Schnorra oraz Wielopodpisy Pierścieniowe. Autor pragnie zaznaczyć, że wczesne projekty tego artykułu zostały opublikowane w społeczności Monero oraz na kanale IRC dotyczącym badań nad Bitcoinem. Projekty haszowania łańcucha bloków są dostępne w [14] i dowodzą, że praca ta została rozpoczęta w lecie 2015 roku i skończona na początku października 2015 roku. E-print dostępny jest także na stronie http://eprint.iacr.org/2015/1098.<br>
                                    <br>
                                    <a href="https://lab.getmonero.org/pubs/MRL-0005.pdf" target="_blank" rel="noreferrer noopener">Przeczytaj całość</a></p>
                              </div>
                            </div>
                          </div>
                    </div>
                <!-- end left two-thirds block-->                
                <!-- right one-third block-->
                <div class="right one-third col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="info-block">
                        <div class="row center-xs">
                            <div class="col">
                                <h2>Dokumenty oficjalne CryptoNote</h2>
                            </div>                            
                        </div>
<div markdown="1">

[Oficjalne dokumenty CryptoNote](https://cryptonote.org/whitepaper.pdf)

Oficjalny dokument napisany przez zespół CryptoNote. Pozwala zrozumieć, jak ogólnie działa algorytm CryptoNote.

[Oficjalne dokumenty z komentarzami](https://downloads.getmonero.org/whitepaper_annotated.pdf)

Laboratorium Badawcze Monero opublikowało wersję dokumentów oficjalnych CryptoNote opatrzoną komentarzami. Są one nieformalnym przeglądem twierdzeń linia po linii w dokumencie. Komentarze wyjaśniają niektóre trudniejsze pojęcia za pomocą łatwiejszych określeń.


[Oficjalne dokumenty zrecenzowane przez Brandona Goodella](https://downloads.getmonero.org/whitepaper_review.pdf)

Formalna recenzja oryginalnego dokumentu dotyczącego kryptografii napisanego przez badacza Laboratorium Brandona Goodella. Analizuje on dogłębnie twierdzenia i zagadnienia matematyczne przedstawione w dokumentacji CryptoNote.
</div>
                    </div>
                </div>
                <!-- end right one-third block-->
            </div>
</section>
