import {  Request, Response } from 'express'
import sobre_nosotros from '../models/sobre_nosotros';


// Models
import SobreNosotros from '../models/sobre_nosotros';


//GET ALL INFORMATION
export async function getAllInformation(req: Request, res: Response): Promise<Response> {
    const info = await SobreNosotros.find();
    return res.json(info);
};



//Create info
export async function createInfo(req: Request, res: Response): Promise<Response> {
    const newInfo = new SobreNosotros({
        vision:req.body.vision,
        mision:req.body.mision,
        equipo:req.body.equipo



    });
    await newInfo.save();
    return res.json({
        message: 'Info saved succefully',
        newInfo
    });
};


//Delete info
export async function deleteInfo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await SobreNosotros.findByIdAndRemove(id);
    return res.json({ message: 'Info delete' });
};

//Update info
export async function updateInfo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const newInfo = new SobreNosotros({
        vision:req.body.vision,
        mision:req.body.mision,
        equipo:req.body.equipo

    });
    const updatedInfo = await SobreNosotros.findByIdAndUpdate(id,newInfo);
    return res.json({
        message: 'Successfully updated',
        updatedInfo
    });
}