import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ cookies, request }) => {
        // Add reminder
        const formData = await request.formData();
        for (const field of formData) {
            console.log(field)
        }
        redirect(303, "/avtonet-obvescanje")
    }
};