<!-- ________________________________SEGNA LIBRO_______________________________ -->

🥉 Requisiti Minimi

Per considerare il progetto completo, devono essere implementate almeno queste funzionalità:

Gestione di una risorsa definita in types.ts

Lista dei record, che mostra solo le proprietà principali title e category, e include:

Barra di ricerca per cercare nei titoli (title)
Filtro per categoria (category)
Ordinamento alfabetico per title o category (A-Z e Z-A)
Pagina di dettaglio per ogni record, con visualizzazione estesa delle sue proprietà (es. price, description, brand, ecc.)

Comparatore di 2 record, visualizzati affiancati per confrontarne le caratteristiche.

È libera la modalità di selezione: puoi permettere all’utente di aggiungere record al comparatore direttamente dalla lista, dalla pagina di dettaglio, oppure usare un menu a tendina, checkbox o qualsiasi altro sistema.

L’importante è che l’utente possa scegliere 2 record qualsiasi e confrontarli in modo chiaro.

Sistema di preferiti, sempre accessibile e aggiornabile:

L’utente può aggiungere o rimuovere record dai preferiti in qualsiasi momento
I preferiti devono essere consultabili in ogni sezione dell’app (es. tramite una sezione dedicata, un’icona fissa, o una sidebar)

🥈 Requisiti Consigliati (Facoltativi)

Da affrontare solo dopo aver completato i Requisiti Minimi:

Comparatore di 2 o più record: il layout si adatta per confrontare più elementi affiancati
Debounce sulla ricerca, per migliorare la UX ed evitare chiamate API inutili
Persistenza dei preferiti (es. salvataggio in localStorage), così che rimangano anche dopo il refresh della pagina
Gestione degli stati vuoti, come:
Nessun risultato trovato
Lista preferiti vuota
Nessun elemento selezionato nel comparatore

🥇 Requisiti Aggiuntivi (Facoltativi)

Da affrontare solo dopo i Requisiti Consigliati:

Gestione di più risorse nella stessa SPA (es. products e courses), con interfacce distinte o integrate
CRUD completo dal frontend:
Creazione di nuovi record
Modifica di record esistenti
Eliminazione di record
Validazione dei campi in input

🎯 BONUS (Facoltativo)

Da affrontare solo dopo i Requisiti Aggiuntivi:

Creazione di una seconda versione del progetto in TypeScript.Se hai completato tutti i requisiti minimi, consigliati e aggiuntivi, puoi realizzare una nuova versione parallela del progetto usando TypeScript.
⚠️La versione principale deve comunque rimanere in JavaScript, come richiesto dal progetto.

⏱️ Come affrontare il progetto

Il progetto finale è pensato per essere svolto in 7 giorni di lavoro.

❗ Non è consigliato lavorarci per più o meno tempo.

📌 Obiettivo principale

Completare tutti i Requisiti Minimi. Sono fondamentali!

❌ Anche uno solo mancante comporterà una penalizzazione all’esame, indipendentemente da quanti requisiti facoltativi siano presenti.

📌 Requisiti facoltativi?

I Requisiti Consigliati, Aggiuntivi e Bonus sono opzionali:

sono lì solo per arricchire il progetto se riesci a finire i Requisiti Minimi in meno di 7 giorni.

⛔ Non è necessario (né consigliato) lavorare 10 o 15 giorni per completare anche i requisiti facoltativi.

✅ È invece importante saper valutare quanto spingersi oltre, mantenendo tempi realistici e un progetto solido.

📌 Consegna del progetto

Al momento del push finale del tuo progetto, ricordati di includere anche:

La cartella /database del backend, contenente i file .json generati per la tua risorsa
Il file types.ts, con la definizione della risorsa (o delle risorse) utilizzate

Perché è importante?

Questi due elementi servono a:

Far capire all’insegnante la struttura dei dati su cui hai lavorato
Consentire di fare dei test funzionali sull’app, con dati reali già pronti
📌 Assicurati che i file .json contengano almeno 10 record coerenti con la tipologia scelta.

❗ Progetti senza database e types.ts potrebbero risultare incompleti e difficili da valutare correttamente.

💪 Buon lavoro!
