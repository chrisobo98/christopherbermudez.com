<template>
    <div>
        <form class="so-widget-form" id="so1734451725" :action="formAction" target="so-iframe" data-behaviour="new_tab"
            data-title="Website Report for" data-touch="Thank you for requesting a report. We'll be in touch shortly!"
            @submit="handleSubmit">
            <input id="so-typeso1734451725" type="hidden" name="type" value="pdf" />
            <input type="hidden" name="uid" value="71622" />
            <input type="hidden" name="behaviour" value="new_tab" />
            <input type="hidden" name="template" value="0" />

            <div class="grid grid-cols-8 gap-4" id="so-fieldswrapso1734451725">
                <input type="text" name="domain" id="so-domainso1734451725"
                    class="col-span-4 md:col-span-4 bg-gray-100 dark:bg-gray-900 px-3 py-2 border border-gray-500 dark:border-gray-600 outline-none rounded-lg ring-indigo-600 transition duration-100 focus:ring-indigo-600"
                    :placeholder="$t('home.hero.websiteUrl')" data-validation="Please enter a correct Website URL."
                    v-model="form.domain" />
                <input type="text" name="first_name" id="so-first-nameso1734451725"
                    class="col-span-4 md:col-span-4 bg-gray-100 dark:bg-gray-900 px-3 py-2 border border-gray-500 dark:border-gray-600 outline-none rounded-lg ring-indigo-600 transition duration-100 focus:ring-indigo-600"
                    :placeholder="$t('home.hero.firstName')" data-validation="Please enter your First Name" v-model="form.firstName" />
                <input type="text" name="phone" id="so-phoneso1734451725"
                    class="col-span-8 md:col-span-3 bg-gray-100 dark:bg-gray-900 px-3 py-2 border border-gray-500 dark:border-gray-600 outline-none rounded-lg ring-indigo-600 transition duration-100 focus:ring-indigo-600"
                    :placeholder="$t('home.hero.phone')" data-validation="Please enter a valid phone number" v-model="form.phone" />
                <input type="text" name="email" id="so-emailso1734451725"
                    class="col-span-8 md:col-span-3 bg-gray-100 dark:bg-gray-900 px-3 py-2 border border-gray-500 dark:border-gray-600 outline-none rounded-lg ring-indigo-600 transition duration-100 focus:ring-indigo-600"
                    :placeholder="$t('home.hero.email')" data-validation="Please enter a valid email address." v-model="form.email" />
                <input
                    class="cursor-pointer col-span-8 md:col-span-2 inline-flex items-center justify-center px-5 py-3 mb-4 sm:mb-0 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm transition focus:ring-purple-800"
                    type="submit" id="so-submitso1734451725" :value="$t('home.hero.audit')" />
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>

const form = reactive({
    domain: '',
    firstName: '',
    email: '',
    phone: ''
});

const formAction = 'https://www.websiteauditserver.com/process-embedded.inc';

function handleSubmit(event: Event) {
    const el = event.target as HTMLFormElement;

    if (!validateForm(el)) {
        event.preventDefault();
        return false;
    }

    const behaviour = el.getAttribute('data-behaviour');
    if (behaviour === 'new_tab') {
        return true;
    }

    event.preventDefault();
    alert('Non "new_tab" behaviours are not implemented.');
    return false;
}

function validateForm(el: HTMLFormElement): boolean {
    const domain = el.querySelector<HTMLInputElement>('input[name="domain"]');
    const phone = el.querySelector<HTMLInputElement>('input[name="phone"]');

    const email = el.querySelector<HTMLInputElement>('input[name="email"]');
    const firstName = el.querySelector<HTMLInputElement>('input[name="first_name"]');

    if (!domain || domain.value.trim() === '') {
        alert(domain?.dataset.validation || 'Invalid domain');
        return false;
    }

    if (!/^(https?:\/\/)?[a-z\d\-]{1,62}\..*/i.test(domain.value.trim())) {
        alert(domain.dataset.validation || 'Invalid domain');
        return false;
    }

    if (firstName && firstName.value.trim() === '') {
        alert(firstName.dataset.validation || 'First name is required');
        return false;
    }

    if (phone && phone.value.trim() !== '' && !/^\d{7,15}$/.test(phone.value.trim())) {
        alert(phone.dataset.validation || 'Invalid phone number.');
        return false;
    }

    if (email && email.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        alert(email.dataset.validation || 'Invalid email address');
        return false;
    }

    return true;
}
</script>
