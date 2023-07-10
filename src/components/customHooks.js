import React,{useState} from 'react';
import enLocale from "date-fns/locale/es";
import { getReport } from '../api/reportes';

export default function useForm  (initialValues){
    const [inputs,setInputs] = useState(initialValues);
    const [paciente_edad, setPaciente_edad] = React.useState([1,100]);
	const [paciente_ingreso_from, handleDateFROMchange] = React.useState(null);
	const [paciente_ingreso_to,handleDateTOchange] = React.useState(null);
	const [preload,setPreload] = React.useState(false);
	const [clinicaStemi_tipoTiempoID,handleDateTimeChangeID] = React.useState(null)
	const [clinicaStemi_tipoTiempoPC,handleDateTimeChangePC] = React.useState(null)
	const [clinicaStemi_tipoTiempoLlS,handleDateTimeChangeLlS] = React.useState(null)
	const [reportesApply,setReportesApply] = React.useState(false)
	const [reportesData,setReportesData] = React.useState("")
	const [procedimiento_fecha_procedimiento, handleDateTimeChangeProcedimiento] = React.useState(null);
    const [expanded, setExpanded] = React.useState({
      paciente:true,
      antecedentes:false,
      factoresRiesgos:false,
      clinica:false,
      datosAngio:false,
      lesiones:false,
      procedimiento:false,
      complicacionesSala:false,
      stent:false,
	  reportes:false
      });
    const [localeMap] = React.useState({
        es:enLocale
      })
    const [locale] = React.useState("es");	
    function valuetext(value) {
        return value;
        }
    const handleChangeEdad = (e,data) => {
		setPaciente_edad(data);
		e.preventDefault()
    };

    const handleSubmit = async (event) => {
      
		console.log("INPUTS",inputs)
		event.preventDefault(true)
		let paciente = {};
		let antecedentes = [];
		let factoresRiesgos = [];
		let cuadroClinico = {};
		let clinicaScasest = {};
		let clinicaStemi = {};
		let datos_angio = {};
		let lesiones={};
		let procedimiento = {};
		let stent = {};
		let form = {};
		//Paciente
		paciente = {
			edad:{
				from: paciente_edad[0],
				to: paciente_edad[1]
			},
			sexo:inputs.paciente_sexo,
			ingreso:{
				from: paciente_ingreso_from === null ? '1970-01-01' : new Date(paciente_ingreso_from).toISOString().slice(0, 10),
				to: paciente_ingreso_to === null ? new Date().toISOString().slice(0, 10) : new Date(paciente_ingreso_to).toISOString().slice(0, 10)
			}
		}
		//Antecedentes
		if(inputs.antecedente_EPOC)
			antecedentes.push("epoc");

		if(inputs.antecedente_ACV)
			antecedentes.push("acv");

		if(inputs.antecedente_AIT)
			antecedentes.push("ait");

		if(inputs.antecedente_ATC)
			antecedentes.push("atc_previa");

		if(inputs.antecedente_CRM)
			antecedentes.push("crm_previa");

		if(inputs.antecedente_FA)
			antecedentes.push("fa");

		if(inputs.antecedente_HTP)
			antecedentes.push("htp");

		if(inputs.antecedente_IAM)
			antecedentes.push("iam_previo");
			
		if(inputs.antecedente_IRC)
			antecedentes.push("irce");

		if(inputs.antecedente_MCPH)
			antecedentes.push("mio_hiper");

		if(Object.keys(antecedentes).length === 0)
			antecedentes = null;

		//Factores de riesgo

		if(inputs.factor_riesgo_HTA)
			factoresRiesgos.push("1");

		if(inputs.factor_riesgo_DLP)
			factoresRiesgos.push("2");
		
		if(inputs.factor_riesgo_DBT)
			factoresRiesgos.push("3");

		if(inputs.factor_riesgo_DBT_IR)
			factoresRiesgos.push("4");

		if(inputs.factor_riesgo_TBQ)
			factoresRiesgos.push("5");

		if(inputs.factor_riesgo_Ex_TBQ)
			factoresRiesgos.push("6");

		if(inputs.factor_riesgo_AHF)
			factoresRiesgos.push("7");

		if(inputs.factor_riesgo_OBESIDAD)
			factoresRiesgos.push("8");
			
		if(Object.keys(factoresRiesgos).length === 0)
			factoresRiesgos = null;

		cuadroClinico =inputs.cuadroClinico_tipo === "NA" ? null :  {tipo_clinica:inputs.cuadroClinico_tipo}
		/* cuadroClinico_paroCardio: inputs.cuadroClinico_paroCardio,
			cuadroClinico_shockCardio:inputs.cuadroClinico_shockCardio,
			cuadroClinico_icg:inputs.cuadroClinico_icg,
			cuadroClinico_arritmiaBloqueoAv:inputs.cuadroClinico_arritmiaBloqueoAv,
			cuadroClinico_arritmiaTvFv:inputs.cuadroClinico_arritmiaTvFv */
		/* if(inputs.cuadroClinico_tipo == "1"){
			cuadroClinico["cuadroClinico_tipoClaseFunc"]= inputs.cuadroClinico_tipoClaseFunc
			
		}
		if(inputs.cuadroClinico_tipo == "2"){
			clinicaScasest = {
				clinicaScasest_tipoAi: inputs.clinicaScasest_tipoAi,
				clinicaScasest_grsAi:inputs.clinicaScasest_grsAi,
				clinicaScasest_tipoNs:inputs.clinicaScasest_tipoNs

			}
			cuadroClinico["clinicaScasest"] = clinicaScasest

		}
		if(inputs.cuadroClinico_tipo == "3"){
			clinicaStemi = {
				clinicaStemi_tipo: inputs.clinicaStemi_tipo,
				clinicaStemi_tipoKk:inputs.clinicaStemi_tipoKk,
				clinicaStemi_tipoAtc:inputs.clinicaStemi_tipoAtc,
				clinicaStemi_diurna:inputs.clinicaStemi_diurna,
				clinicaStemi_tipoTiempoID:clinicaStemi_tipoTiempoID,
				clinicaStemi_tipoTiempoLlS:clinicaStemi_tipoTiempoLlS,
				clinicaStemi_tipoTiempoPC:clinicaStemi_tipoTiempoPC
			}
			cuadroClinico["clinicaStemi"] = clinicaStemi
			
		} */
		
		if(inputs.angiografico_dominancia === "NA" && inputs.angiografico_revascularizacion === "NA" && inputs.angiografico_tiempo_revascularizacion === "NA" && inputs.angiografico_tipo_motivo === "NA" && inputs.angiografico_tipo_procedimiento === "NA" && inputs.angiografico_tronco === "NA" && inputs.angiografico_syntax === "" && inputs.angiografico_vasos_enf === "" && inputs.angiografico_vasos_tratados === "")
			datos_angio = null;
		else{
			if(inputs.angiografico_tipo_procedimiento !== "NA")
				datos_angio["tipo_procedimiento"] = inputs.angiografico_tipo_procedimiento;

			if(inputs.angiografico_vasos_enf  !== "")
				datos_angio["vasos_enf"] = [inputs.angiografico_vasos_enf];

			if(inputs.angiografico_vasos_tratados !== "")
				datos_angio["vasos_tratados"] = [inputs.angiografico_vasos_tratados];

			if(inputs.angiografico_tronco !== "NA")
				datos_angio["tronco"] = inputs.angiografico_tronco;

			if(inputs.angiografico_syntax !== "")
				datos_angio["syntax"] = inputs.angiografico_syntax;

			if(inputs.angiografico_dominancia !== "NA")
				datos_angio["dominancia"] = inputs.angiografico_dominancia;

			if(inputs.angiografico_revascularizacion !== "NA")
				datos_angio["tipo_revascularizacion"] = inputs.angiografico_revascularizacion;

			if(inputs.angiografico_tipo_motivo !== "NA")
				datos_angio["tipo_motivo"] = inputs.angiografico_tipo_motivo;

			if(inputs.angiografico_tiempo_revascularizacion !== "NA")
				datos_angio["tiempo_revascularizacion"] = inputs.angiografico_tiempo_revascularizacion;
			
		}
		// Lesiones
		if(inputs.lesion_arteria === "NA" && inputs.lesion_localizacion === "NA")	
			lesiones = null;

		if(inputs.lesion_arteria !== "NA")
			lesiones["arteria_id"] = inputs.lesion_arteria;

		if(inputs.lesion_localizacion !== "NA")
			lesiones["localizacion_id"] = inputs.lesion_localizacion;
		
			
		console.log("lesiones",lesiones)
		event.preventDefault()
		/* lesion_angio_contralateral: inputs.lesion_angio_contralateral,
		lesion_balon: inputs.lesion_balon,
		lesion_balon_atmosfera: inputs.lesion_balon_atmosfera,
		lesion_balon_diametro: inputs.lesion_balon_diametro,
		lesion_bifurcacion: inputs.lesion_bifurcacion,
		lesion_blush_post: inputs.lesion_blush_post,
		lesion_cto_cuerda: inputs.lesion_cto_cuerda,
		lesion_cto_tiempo_cruce: inputs.lesion_cto_tiempo_cruce,
		lesion_cutting_balon: inputs.lesion_cutting_balon,
		lesion_cutting_balon_atmosfera: inputs.lesion_cutting_balon_atmosfera,
		lesion_cutting_balon_diametro: inputs.lesion_cutting_balon_diametro,
		lesion_exito_angio: inputs.lesion_exito_angio,
		lesion_fibrinoliticos: inputs.lesion_fibrinoliticos,
		lesion_inhibidores: inputs.lesion_inhibidores,
		lesion_kissing_final: inputs.lesion_kissing_final,
		lesion_microcateter: inputs.lesion_microcateter,
		lesion_no_reflow: inputs.lesion_no_reflow,
		lesion_postdilatacion: inputs.lesion_postdilatacion,
		lesion_postdilatacion_diametro: inputs.lesion_postdilatacion_diametro,
		lesion_predilatacion: inputs.lesion_predilatacion,
		lesion_proteccion_distral: inputs.lesion_proteccion_distral,
		lesion_recanalizacion_retrograda: inputs.lesion_recanalizacion_retrograda,
		lesion_rotablator: inputs.lesion_rotablator,
		lesion_rotablator_oliva: inputs.lesion_rotablator_oliva,
		lesion_stent: inputs.lesion_stent,
		lesion_tromboaspiracion: inputs.lesion_tromboaspiracion,
	
		lesion_diam_vaso:inputs.lesion_diam_vaso,
		lesion_timi_post:inputs.lesion_timi_post,
		lesion_timi_pre:inputs.lesion_timi_pre,
		lesion_obstruccion_pre:inputs.lesion_obstruccion_pre,
		lesion_obstruccion_post:inputs.lesion_obstruccion_post,
		lesion_tipo_longitud:inputs.lesion_tipo_longitud,
		lesion_pres_trombo:inputs.lesion_pres_trombo,
		lesion_calc_severa:inputs.lesion_calc_severa,
		lesion_restenosis:inputs.lesion_restenosis,
		lesion_angulacion:inputs.lesion_angulacion,
		lesion_tipo_oclusion:inputs.lesion_tipo_oclusion,
		lesion_tipo_bifurcacion:inputs.lesion_tipo_bifurcacion */
			
		
		
		procedimiento = {
			procedimiento_fecha_procedimiento:procedimiento_fecha_procedimiento,
			procedimiento_tipo_acceso:inputs.procedimiento_tipo_acceso,
			procedimiento_french:inputs.procedimiento_french,
			procedimiento_contraste:inputs.procedimiento_contraste,
			procedimiento_kerma:inputs.procedimiento_kerma,
			procedimiento_tipo_fluroscopia:inputs.procedimiento_tipo_fluroscopia
		}
		stent={
			stent_bare: inputs.stent_bare,
			stent_des: inputs.stent_des,
			stent_diametro: inputs.stent_diametro,
			stent_graft: inputs.stent_graft,
			stent_tipo: inputs.stent_tipo
		}
		form ={
			fields:{
				paciente:paciente,
				antecedente:antecedentes,
				riesgos:factoresRiesgos,
				clinica:cuadroClinico,
				angiografico : datos_angio,
				lesiones:lesiones,
				procedimiento:null,
				stent:null,
				title: "Reporte prueba",
				mailto:null
			}
		}

		setPreload(true);
		console.log("FORM",form)
		const response = await getReport(form)
		console.log("respuesta agregar",response)
		
		try {
			setPreload(false);
			setReportesApply(true)
			setReportesData(response)
			//history.push(`/admin/proveedor_lizen/listado`);
			
			
		} catch (error) {
			console.log("catch",error)
		
		} 
 
		
    }
    const handleChangeAccordion = (panel)=>(event, newExpanded) => {
	
      setExpanded({...expanded,[panel]:newExpanded})
    };
  
    const handleInputChange = (event) => {
      
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }
     const handleInputCheckedChange = (event) => {
		
		setInputs(inputs => ({...inputs, [event.target.name]: event.target.checked}));
		}
    return {
		handleSubmit,
		handleInputChange,
		handleChangeAccordion,
		handleChangeEdad,
		valuetext,
		handleDateFROMchange,
		handleDateTOchange,
		handleInputCheckedChange,
		handleDateTimeChangeID,
		handleDateTimeChangePC,
		handleDateTimeChangeLlS,
		handleDateTimeChangeProcedimiento,
		inputs,
		expanded,
		paciente_ingreso_from,
		paciente_ingreso_to,
		paciente_edad,
		localeMap,
		locale,
		clinicaStemi_tipoTiempoID,
		clinicaStemi_tipoTiempoPC,
		clinicaStemi_tipoTiempoLlS,
		procedimiento_fecha_procedimiento,
		preload,
		reportesApply,
		reportesData,
    };
}