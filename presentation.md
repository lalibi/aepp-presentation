Ανάπτυξη Εφαρμογών σε Προγραμματιστικό Περιβάλλον (ΑΕΠΠ)
========================================================

---
layout: true

## 2.1 Τι είναι αλγόριθμος.

???
2.1, 2.3: _2ω_

---
> Αλγόριθμος είναι μια πεπερασμένη σειρά ενεργειών, αυστηρά καθορισμένων και εκτελέσιμων σε πεπερασμένο χρόνο, που στοχεύουν στην επίλυση ενός προβλήματος.

.footnote[
  _Βιβλίο Μαθητή, &sect; 2.1, σελ.33_
]

---
> Κάθε αλγόριθμος απαραίτητα ικανοποιεί τα επόμενα κριτήρια.

- **Είσοδος (input)**. Καμία, μία ή περισσότερες τιμές δεδομένων πρέπει να δίνονται ως είσοδοι στον αλγόριθμο. Η περίπτωση που δεν δίνονται τιμές δεδομένων εμφανίζεται, όταν ο αλγόριθμος δημιουργεί και επεξεργάζεται κάποιες πρωτογενείς τιμές με τη βοήθεια συναρτήσεων παραγωγής τυχαίων αριθμών ή με τη βοήθεια άλλων απλών εντολών.
- **Έξοδος (output)**. Ο αλγόριθμος πρέπει να δημιουργεί τουλάχιστον μία τιμή δεδομένων ως αποτέλεσμα προς το χρήστη ή προς έναν άλλο αλγόριθμο.
- **Καθοριστικότητα (definiteness)**. Κάθε εντολή πρέπει να καθορίζεται χωρίς καμία αμφιβολία για τον τρόπο εκτέλεσής της. Λόγου χάριν, μία εντολή διαίρεσης πρέπει να θεωρεί και την περίπτωση όπου ο διαιρέτης λαμβάνει μηδενική τιμή.
- **Περατότητα (finiteness)**. Ο αλγόριθμος να τελειώνει μετά από πεπερασμένα βήματα εκτέλεσης των εντολών του. Μία διαδικασία που δεν τελειώνει μετά από ένα συγκεκριμένο αριθμό βημάτων δεν αποτελεί αλγόριθμο, αλλά λέγεται απλά υπολογιστική διαδικασία (computational procedure).
- **Αποτελεσματικότητα (effectiveness)**. Κάθε μεμονωμένη εντολή του αλγορίθμου να είναι απλή. Αυτό σημαίνει ότι μία εντολή δεν αρκεί να έχει ορισθεί, αλλά πρέπει να είναι και εκτελέσιμη.

.footnote[
  _Βιβλίο Μαθητή, &sect; 2.1, σελ.33_
]

---
layout: true

## 2.3 Περιγραφή και αναπαράσταση αλγορίθμων.

---
> Διάφοροι τρόποι αναπαράστασης ενός αλγορίθμου:

- με **ελεύθερο κείμενο (free text)**, που αποτελεί τον πιο ανεπεξέργαστο και αδόμητο τρόπο παρουσίασης αλγορίθμου. Έτσι εγκυμονεί τον κίνδυνο ότι μπορεί εύκολα να οδηγήσει σε μη εκτελέσιμη παρουσίαση παραβιάζοντας το τελευταίο χαρακτηριστικό των αλγορίθμων, δηλαδή την αποτελεσματικότητα.
- με **διαγραμματικές τεχνικές (diagramming techniques)**, που συνιστούν ένα γραφικό τρόπο παρουσίασης του αλγορίθμου. Από τις διάφορες διαγραμματικές τεχνικές που έχουν επινοηθεί, η πιο παλιά και η πιο γνωστή ίσως, είναι το διάγραμμα ροής (flow chart). Ωστόσο η χρήση διαγραμμάτων ροής για την παρουσίαση αλγορίθμων δεν αποτελεί την καλύτερη λύση, γι’ αυτό και εμφανίζονται όλο και σπανιότερα στη βιβλιογραφία και στην πράξη.
- με **φυσική γλώσσα (natural language)** κατά βήματα. Στην περίπτωση αυτή χρειάζεται προσοχή, γιατί μπορεί να παραβιασθεί το τρίτο βασικό χαρακτηριστικό ενός αλγορίθμου, όπως προσδιορίσθηκε προηγουμένως, δηλαδή το κριτήριο του καθορισμού.
- με **κωδικοποίηση (coding)**, δηλαδή με ένα πρόγραμμα γραμμένο είτε σε μία ψευδογλώσσα είτε σε κάποια γλώσσα προγραμματισμού που όταν εκτελεσθεί θα δώσει τα ίδια αποτελέσματα με τον αλγόριθμο.

.footnote[
  _Βιβλίο Μαθητή, &sect; 2.3, σελ.35_
]

---

[themata_epan_2003]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2003_imerisia_epanaliptikes.pdf

[themata_epan_2006]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2006_imerisia_epanaliptikes.pdf
[lyseis_epan_2006]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2008_epanaliptikes.pdf

[themata_2008]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2008_imerisia_epanaliptikes.pdf
[lyseis_2008]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2008_epanaliptikes.pdf

[themata_2009]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2009_imerisia.pdf
[lyseis_2009]:  http://www.aepp.edu.gr/wp-content/uploads/2010/04/lyseis_aepp_2009.pdf

[themata_epan_2009]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2009_imerisia_epanaliptikes.pdf
[lyseis_epan_2009]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2009_epanaliptikes.pdf

[themata_epan_2010]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2010_imerisia_epanaliptikes.pdf
[lyseis_epan_2010]:  http://www.aepp.edu.gr/wp-content/uploads/2010/04/lyseis_aepp_2010_epanaliptikes.pdf

[themata_2011]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2011_imerisia.pdf
[lyseis_2011]:  http://www.aepp.edu.gr/wp-content/uploads/2010/04/lyseis_aepp_2011.pdf

[themata_epan_2011]: http://www.aepp.edu.gr/wp-content/uploads/2010/04/aepp_2011_imerisia_epanaliptikes.pdf
[lyseis_epan_2011]:  http://www.aepp.edu.gr/wp-content/uploads/2010/04/lyseis_aepp_2011_epanaliptikes.pdf

[themata_2012]: http://www.aepp.edu.gr/wp-content/uploads/2011/07/aepp_2012_imerisia.pdf
[lyseis_2012]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2012.pdf

[themata_epan_2012]: http://www.aepp.edu.gr/wp-content/uploads/2011/07/aepp_2012_imerisia_epanaliptikes.pdf
[lyseis_epan_2012]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2012_epanaliptikes.pdf

[themata_2014]: http://www.aepp.edu.gr/wp-content/uploads/2011/07/aepp_2014_imerisia.pdf
[lyseis_2014]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2014.pdf

[themata_2015]: http://www.aepp.edu.gr/wp-content/uploads/2011/07/aepp_2015_imerisia.pdf
[lyseis_2015]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2015.pdf

[themata_epan_2015]: http://www.aepp.edu.gr/wp-content/uploads/2011/07/aepp_2015_imerisia_epanaliptikes.pdf
[lyseis_epan_2015]:  http://www.aepp.edu.gr/wp-content/uploads/2011/07/lyseis_aepp_2015_epanaliptikes.pdf
