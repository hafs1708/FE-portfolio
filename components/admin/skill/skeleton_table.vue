<template>
    <tbody>
        <!-- tampilkan kerangka / skeleton -->
        <tr v-for="n in 10" :key="n">
            <th>
                <div class="skeleton w-8 h-8 rounded"></div>
            </th>
            <td>
                <div class="skeleton w-20 h-6 mx-auto"></div>
            </td>
            <td>
                <div class="skeleton w-20 h-6 mx-auto"></div>
            </td>
            <td>
                <div class="skeleton w-20 h-6 mx-auto"></div>
            </td>
            <td>
                <div class="flex justify-center gap-2">
                    <div class="skeleton w-20 h-6"></div>
                    <div class="skeleton w-20 h-6"></div>
                </div>
            </td>
        </tr>
    </tbody>
</template>