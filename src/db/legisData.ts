import mongoose from "mongoose";

const LegisSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    ano: { type: String, required: true },
});


export const LegisModel = mongoose.model('User', LegisSchema);

export const getLegis = () => LegisModel.find();
export const createLegis = (values: Record<string, any>) => new LegisModel(values)
    .save().then((titulo) =>  titulo.toObject());  
export const deleteLegisById = (id: string) => LegisModel.findByIdAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) => LegisModel.findByIdAndUpdate(id, values);