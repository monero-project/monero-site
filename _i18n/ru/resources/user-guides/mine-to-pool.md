{% include disclaimer.html translated="yes" translationOutdated="no" %}

## Wallet

Перед тем как начать, вам необходимо иметь уже сконфигурированный и готовый
к работе кошелёк. Пулу нужно знать адрес вашего кошелька, чтобы он смог
направлять на него платежи. Дополнительную информацию можно найти в
[Руководстве по приёму Monero]({{ site.baseurl}}/get-started/accepting)

## Profitability

Перед тем как начать майнинг, вы должны решить, стоит ли вам вообще этим
заниматься. Решение необходимо принять, исходя из ваших затрат на
электроэнергию и доступного вам оборудования. Существует множество сайтов,
таких как
[CryptoCompare](https://www.cryptocompare.com/mining/calculator/xmr),
которые позволяют ввести значения параметров скорости и мощности вашего
майнера и на основе этих данных вычисляют возможную прибыль (или убыток) за
неделю/месяц.

## Download Miner

Первым шагом является скачивание на ваш компьютер программного обеспечения,
необходимого для майнинга.

### Windows

Разработчик XMRig предоставляет готовые двоичные файлы, которые потребуются
пользователям Windows. Их можно скачать со [страницы релизов на
GitHub](https://github.com/xmrig/xmrig/releases/latest).

Там вы сможете найти архив `xmrig-VERSION-msvc-win64.zip`. Скачайте этот
файл и извлеките его содержимое в какое-нибудь место, например, на рабочий
стол.

### Ubuntu Linux

The XMRig developer provides pre-built binaries for Ubuntu Bionic (18.04)
and Focal (20.04). They may work on other Ubuntu versions, and on other
distributions, but this is not guaranteed.

Эти двоичные файлы также можно скачать на [странице релизов на
GitHub](https://github.com/xmrig/xmrig/releases/latest).

Scroll down to 'Assets' until you see the correct version for your
system. Download this file, extract the archive somewhere memorable, like
your desktop.

### Other distributions and operative systems

Binaries are available for multiple distributions and operative systems, but
you can also build the miner by yourself. Take a loot at [XMrig's
docs](https://xmrig.com/docs/miner)

## Selecting a pool

Существует огромное количество пулов. Список пулов можно найти на
[miningpoolstats.stream/monero](https://miningpoolstats.stream/monero).

Выбор большего пула означает, что вы будете получать более частые (но
меньшие) выплаты, а выбор меньших пулов поможет обеспечить
децентрализованность сети. [Майнеры не теряют доходность при работе в
меньших пулах](https://redd.it/g6uh2l).

## Configuring the miner

See the [official docs](https://xmrig.com/docs/miner/config), for
instructions and suggestions.

## Starting the miner

Пользователи Windows могут сделать это двойным кликом по файлу
xmrig.exe. Пользователям других операционных систем следует воспользоваться
командой `cd` и перейти в директорию, содержащую XMRig, затем ввести
`./xmrig` и дождаться ответа на команду.

Если вы видите зелёные сообщения о том, что данные были приняты, поздравляем
- всё работает!

## Troubleshooting

### Anti-virus keeps removing XMRig

Некоторые антивирусы помечают XMRig как вредоносное программное обеспечение,
поскольку XMRig часто устанавливается на заражённые компьютеры без согласия
их владельцев в целях недобросовестного майнинга. Так как это ваш компьютер
и вы настраиваете майнер для себя, можно уверенно добавить XMRig в список
исключений вашего антивируса.

### Cannot read/set MSR

В случае с некоторыми CPU XMRig пытается повысить производительность,
отключая определённые функции, такие как буфер предварительной выборки
команд CPU. Для этих операций требуются права администратора, поэтому
попробуйте правой кнопкой мыши кликнуть по файлу xmrig.exe и запустить его
от имени администратора или же запустить `sudo ./xmrig` в других системах.
systems.

### Algo not known

Следует найти строку в config.json, в которой будет написано `algo: null`, и
изменить текст на `algo: "rx/0"`. По умолчанию XMRig ожидает, что именно пул
укажет ему, какой алгоритм использовать при майнинге.

### Huge Pages 0%

#### Allowing large pages on Windows

Взято из
[MSDN](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-the-lock-pages-in-memory-option-windows?view=sql-server-ver15):

1. В меню Start (Запуск) выбрать Run (Запустить). В окошке Open (Открыть)
   набрать gpedit.msc.
2. В консоли Local Group Policy Editor (Редактор локальной групповой
   политики) перейти в Computer Configuration (Конфигурация компьютера), а
   затем в Windows Settings (Конфигурация Windows).
3. Перейти в Security Settings (Параметры безопасности), а затем в Local
   Policies (Локальные политики).
4. Выбрать папку User Rights Assignment (Назначение прав пользователя).
5. Политика будет отображаться в окошке подробной информации.
6. В этом окошке двойным кликом выберите Lock pages in memory (Блокировка
   страниц в памяти).
7. In the Local Security Setting – Lock pages in memory dialog box, click
   Add User or Group.
8. В диалоговом окне Select Users, Service Accounts, or Groups (Выбор:
   «Пользователи» или «Группы») добавить пользователя, под которым вы будете
   запускать майнер.
9. Перезагрузите компьютер, чтобы изменения вступили в силу.

Также может понадобиться запустить майнер от имени администратора.

#### Allowing large pages on Linux

Сначала необходимо остановить майнер (если он работает) и ввести следующие
команды, чтобы включить возможность загрузки больших страниц, а затем
запустить майнер от имени root:

	sudo sysctl -w vm.nr_hugepages=1168
	sudo ./xmrig

Возможно, придётся увеличить значение 1168 в зависимости от того, сколько
узлов NUMA поддерживает ваш CPU.

#### Allowing large pages on macOS

Большие страницы не поддерживаются macOS.

### Balance Not Increasing

Most pools are <abbr title="Pay Per Last N Shares">PPLNS</abbr> pools,
which means that you only get paid when a miner on the pool finds a
block. If the pool you are mining on is small, this can take a few
days to weeks.

Кроме того, все вычисленные блоки должны стать достаточно «зрелыми», прежде
чем за них можно будет получить вознаграждение. На это уходит еще порядка 60
блоков (примерно 2 часа).

## Getting Help

An active Monero mining community on Reddit is
[/r/MoneroSupport](https://www.reddit.com/r/MoneroSupport/). You can also
join [#monero-pools on
Libera](https://web.libera.chat/?channel=#monero-pools) or Matrix
(#monero-pools:monero.social).

## Going Futher

* Подумайте об использовании отдельного подадреса для майнинга, чтобы ваш
  основной адрес нельзя было связать с различными сервисами.
* [Рассмотрите возможность использования Tor для подключения к
  пулу](https://xmrig.com/docs/miner/tor) (или к скрытым пулам, таким как
  HashVault, RespectXMR и MoneroOcean). Это позволит скрыть то, что вы
  занимаетесь майнингом, от вашего интернет-провайдера и не позволит самому
  пулу узнать, кто вы.
