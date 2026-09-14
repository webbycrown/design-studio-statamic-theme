(function ($) {
    function formParts($form) {
        return {
            $error: $form.find('.stay-connect-alert--error'),
            $success: $form.find('.stay-connect-success'),
            $fields: $form.find('.stay-connect-fields'),
            $button: $form.find('[type="submit"]'),
            $label: $form.find('.btn-label'),
            $loading: $form.find('.btn-loading')
        };
    }

    function resetForm($form) {
        var parts = formParts($form);
        parts.$error.attr('hidden', true).removeClass('is-visible').empty();
        parts.$success.attr('hidden', true).removeClass('is-visible');
        parts.$fields.removeAttr('hidden').removeClass('is-hidden');
        $form.removeClass('is-sent is-loading');
    }

    function showError($form, html) {
        var parts = formParts($form);
        parts.$error.html(html).removeAttr('hidden').addClass('is-visible');
    }

    function parseErrors(xhr) {
        var payload = xhr.responseJSON || {};
        var messages = [];

        if (payload.errors && payload.errors.length) {
            messages = payload.errors;
        } else if (payload.error) {
            messages = Object.values(payload.error);
        } else if (payload.message) {
            messages = [payload.message];
        } else {
            messages = ['Please fill in all required fields.'];
        }

        if (!Array.isArray(messages)) {
            messages = Object.values(messages);
        }

        return messages.join('<br>');
    }

    $(document).on('submit', 'form.js-theme-form', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $form = $(this);
        var parts = formParts($form);

        parts.$error.attr('hidden', true).removeClass('is-visible').empty();
        $form.addClass('is-loading');
        parts.$button.addClass('is-loading').prop('disabled', true);
        parts.$label.attr('hidden', true);
        parts.$loading.removeAttr('hidden');

        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': $form.find('[name="_token"]').val() || $('meta[name="csrf-token"]').attr('content') || ''
            }
        })
        .done(function (response) {
            if (response && response.success) {
                parts.$fields.attr('hidden', true).addClass('is-hidden');
                parts.$success.removeAttr('hidden').addClass('is-visible');
                $form.addClass('is-sent');
                $form[0].reset();
                return;
            }

            showError($form, 'Something went wrong. Please try again.');
        })
        .fail(function (xhr) {
            showError($form, parseErrors(xhr));
        })
        .always(function () {
            $form.removeClass('is-loading');
            parts.$button.removeClass('is-loading').prop('disabled', false);
            parts.$label.removeAttr('hidden');
            parts.$loading.attr('hidden', true);
        });
    });

    $(document).on('click', '.popup-with-form', function () {
        var role = $(this).data('role') || '';
        var $form = $('#test-form form.js-theme-form');
        resetForm($form);
        $form.find('.js-career-role').val(role);
    });

    function runLoadMore($btn, cardSelector, batch) {
        if ($btn.hasClass('is-loading')) {
            return;
        }

        $btn.addClass('is-loading');

        window.setTimeout(function () {
            var $hidden = $(cardSelector + '.is-hidden').slice(0, batch);
            $hidden.removeClass('is-hidden');
            $btn.removeClass('is-loading');
            if (!$(cardSelector + '.is-hidden').length) {
                var $wrap = $btn.closest('.latest_btn, .load-btn, .wc-btn, .wp-team-btn');
                if ($wrap.length) {
                    $wrap.hide();
                } else {
                    $btn.hide();
                }
            }
        }, 600);
    }

    $(document).on('click', '.js-load-more', function (e) {
        e.preventDefault();
        var $btn = $(this);
        runLoadMore($btn, $btn.data('cards') || '.js-card', parseInt($btn.data('batch'), 10) || 3);
    });
})(jQuery);
