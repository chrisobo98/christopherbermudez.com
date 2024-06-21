<template>
  <div class="github-profile">
    <h2 class="text-4xl font-semibold mb-3">{{ t("resume.github.title") }}</h2>
    <div class="contribution-chart">
      <img :src="contributionChartUrl" alt="GitHub Contributions" />
    </div>
    <div
      class="pinned-repos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
    >
      <div
        v-for="repo in pinnedRepos"
        :key="repo.id"
        class="repo-card p-4 rounded-lg shadow-lg bg-white dark:bg-[#1e1d1f] flex flex-col justify-between"
      >
        <div>
          <h3 class="text-2xl font-bold mb-2">{{ repo.name }}</h3>
          <p class="text-gray-700 dark:text-gray-300">{{ repo.description }}</p>
        </div>
        <NuxtLink :to="repo.html_url" target="_blank">
          <BaseButton class="mt-2 block mx-auto">
            {{ t("resume.github.viewRepo") }}
          </BaseButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { Octokit } from "@octokit/rest";
import BaseButton from "@/components/ui/BaseButton.vue";

const { t } = useI18n();
const username = "chrisobo98";
const contributionChartUrl = `https://ghchart.rshah.org/${username}`;
const pinnedRepos = ref([]);

onMounted(async () => {
  const octokit = new Octokit();
  const { data } = await octokit.request(`GET /users/${username}/repos`, {
    username,
    per_page: 6,
    sort: "pushed",
  });

  pinnedRepos.value = data;
});
</script>

<style scoped>
.github-profile {
  text-align: center;
}

.contribution-chart img {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.repo-card {
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.repo-card:hover {
  transform: translateY(-5px);
}

.repo-card h3 {
  margin-bottom: 0.5rem;
}

.repo-card p {
  flex-grow: 1;
  margin-bottom: 1rem;
}

.repo-card .base-button {
  align-self: center;
}
</style>
