(defun htmlize-region-for-paste (beg end)
  (interactive "r")
  "Htmlize the region and return just the HTML as a string.
This forces the `inline-css' style and only returns the HTML body,
but without the BODY tag.  This should make it useful for inserting
the text to another HTML buffer."
  (setq buffer-file-name "chauncy")
  (let ((htmlbuf (generate-new-buffer
                  (if (buffer-file-name)
                      (htmlize-make-file-name
                       (file-name-nondirectory
                        (buffer-file-name)))
                    "*html*")))
        )
    (let* ((htmlize-output-type 'inline-css)
           (htmlbuf (htmlize-region beg end)))
      (unwind-protect
          (with-current-buffer htmlbuf
            (buffer-substring (plist-get htmlize-buffer-places 'content-start)
                              (plist-get htmlize-buffer-places 'content-end)))
        (save-buffer htmlbuf)))))

(let ((mybuf (generate-new-buffer))))

(defun snarf (beg, end)
  (buffer))
(defun bang(start, end)
  (+ start end))

(bang 20 20)

(defun arity (a &optional b &rest c)
  (message (concat a b c)))

(arity "tony" )

(defun pan (a b)
  (message (concat a b)))

(pan "tippy" "bippy")


(message (concat "tony" "ton"))

(defun pop (a b)
  (message a)
  (message b)
  )

(pop "this" "that")

(write-line "tony was here")
(write-line (concat "bling " "blang"))

(defun add( a b )
  (concat a b))

(add "tony" "tony" )
(defun top (a b)
  (setq add (concat a b))
  (message add))


(top "tony" "tony")
