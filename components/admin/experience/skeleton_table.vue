<template>
    <tbody>
        <!-- tampilkan skeleton / kerangka -->
        <tr v-for="n in 10" :key="n">
            <th>
                <div class="skeleton w-8 h-8 rounded"></div>
            </th>
            <td>
                <div class="skeleton w-20 h-6"></div>
            </td>
            <td>
                <div class="skeleton w-20 h-6 mx-auto"></div>
            </td>
            <td>
                <div class="skeleton w-20 h-6 mx-auto"></div>
            </td>
            <td>
                <div class="flex gap-3 justify-center">
                    <div class="skeleton w-20 h-6"></div>
                    <div class="skeleton w-20 h-6"></div>
                </div>
            </td>
            <td>
                <div class="flex gap-3 justify-center">
                    <div class="skeleton rounded-full w-8 h-8"></div>
                    <div class="skeleton rounded-full w-8 h-8"></div>
                </div>
            </td>
        </tr>
    </tbody>
</template>
