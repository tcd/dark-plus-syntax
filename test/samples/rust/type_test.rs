impl FromStr for Spec {
    type Err = Error;

    fn from_str(s: &str) -> Result<Spec, Error> {
        let pieces: Vec<&str> = s.split(':').collect();
        if pieces.len() <= 1 || pieces.len() > 3 {
            return Err(Error::InvalidFormat(s.to_string()));
        }
        let otype: OutType = pieces[0].parse()?;
        match pieces[1].parse()? {
            SpecType::None => Ok(Spec { ty: otype, value: SpecValue::None }),
            SpecType::Style => {
                if pieces.len() < 3 {
                    return Err(Error::InvalidFormat(s.to_string()));
                }
                let style: Style = pieces[2].parse()?;
                Ok(Spec { ty: otype, value: SpecValue::Style(style) })
            }
            SpecType::Fg => {
                if pieces.len() < 3 {
                    return Err(Error::InvalidFormat(s.to_string()));
                }
                let color: Color = pieces[2].parse()?;
                Ok(Spec { ty: otype, value: SpecValue::Fg(color) })
            }
            SpecType::Bg => {
                if pieces.len() < 3 {
                    return Err(Error::InvalidFormat(s.to_string()));
                }
                let color: Color = pieces[2].parse()?;
                Ok(Spec { ty: otype, value: SpecValue::Bg(color) })
            }
        }
    }
}

impl FromStr for OutType {
    type Err = Error;

    fn from_str(s: &str) -> Result<OutType, Error> {
        match &*s.to_lowercase() {
            "path" => Ok(OutType::Path),
            "line" => Ok(OutType::Line),
            "column" => Ok(OutType::Column),
            "match" => Ok(OutType::Match),
            _ => Err(Error::UnrecognizedOutType(s.to_string())),
        }
    }
}
